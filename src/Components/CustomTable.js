import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, MenuItem, TextField } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, Search } from '@material-ui/icons';
import { CustomButton, TableWrapper } from '../Assets/styled';
import { jobPriorties } from '../Assets/constants';

export default function CustomTable(props) {
  const [dataState, setDataState] = useState([]);

  const [tableSearch, setTableSearch] = useState('');
  const [tablePriorty, setTablePriorty] = useState('all');
  const [tableSort, setTableSort] = useState({ order: null, name: null });

  const { data, columns, header } = props;

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(dataState)) {
      setDataState(data);
    }
  }, [data, dataState]);

  /**
   * @param {Number} newPriortyId - new priorty id
  */
  const doFilter = (newPriortyId) => {
    if (data?.length > 0) {
      // newPriortyId === 'all' ? setDataState(data) : setDataState(data.filter(jb => jb.priorty === newPriortyId));
      if ((newPriortyId || tablePriorty) === 'all') {
        if (tableSearch.length > 0) {
          setDataState(data.filter((jb) => jb.name.toLowerCase().includes(tableSearch.toLowerCase())));
        } else {
          setDataState(data);
        }
      } else if (tableSearch.length > 0) {
        setDataState(data.filter((jb) => jb.priorty === (newPriortyId || tablePriorty) && jb.name.toLowerCase().includes(tableSearch.toLowerCase())));
      } else {
        setDataState(data.filter((jb) => jb.priorty === (newPriortyId || tablePriorty)));
      }
    }
  };

  const sortColumn = (column) => {
    let order = 'desc';
    if (tableSort?.name === column?.selector) {
      // order = tableSort?.order === 'desc' ? 'asc' : tableSort?.order === 'asc' ? null : 'desc';
      if (tableSort?.order === 'desc') {
        order = 'asc';
      } else if (tableSort?.order === 'asc') {
        order = null;
      } else {
        order = 'desc';
      }
    }
    if (column.sortable && order) {
      const newData = [...dataState];
      newData.sort((a, b) => {
        if (a[column.selector] < b[column.selector]) {
          return order === 'desc' ? -1 : 1;
        }
        if (a[column.selector] > b[column.selector]) {
          return order === 'desc' ? 1 : -1;
        }
        return 0;
      });
      setDataState(newData);
      setTableSort({ order, name: column.selector });
    } else {
      // setDataState(data);
      doFilter();
      setTableSort({ order: null, name: null });
    }
  };

  const newSorrted = useCallback(() => {
    const sortedData = data?.sort?.((a, b) => {
      if (a.priorty < b.priorty) {
        return -1;
      }
      if (a.priorty > b.priorty) {
        return 1;
      }
      return 0;
    });
    setDataState(sortedData);
  }, [data]);

  useEffect(() => {
    if (data?.length > 0) {
      newSorrted();
      setTablePriorty('all');
      setTableSearch('');
    }
  }, [data, newSorrted]);

  /**
   * @param {String} newSearch - new search value
  */
  const doSearch = (newSearch) => {
    if (data?.length > 0) {
      // setDataState(data.filter(jb => jb.name.toLowerCase().includes(newSearch.toLowerCase())));
      if (tablePriorty === 'all') {
        setDataState(data.filter((jb) => jb.name.toLowerCase().includes(newSearch.toLowerCase())));
      } else {
        setDataState(data.filter((jb) => jb.priorty === tablePriorty && jb.name.toLowerCase().includes(newSearch.toLowerCase())));
        // setDataState(data.filter(jb => jb.name.toLowerCase().includes(newSearch.toLowerCase())));
        // doFilter(tablePriorty);
      }
    }
  };

  return (
    <>
      <div className="tableHeader">
        <h2>{header}</h2>
        <span>
          (
          {dataState?.length || 0}
          /
          {data?.length || 0}
          )
        </span>
      </div>
      <TableWrapper>
        <div className="tableSearch">
          <div className="inputWrapper flex3">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Job Name"
              value={tableSearch}
              onChange={(e) => { setTableSearch(e.target.value); doSearch(e.target.value); }}
            // onChange={e => doSearch(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="inputWrapper flex1">
            <TextField
              select
              size="small"
              variant="outlined"
              value={tablePriorty}
              onChange={(e) => { setTablePriorty(e.target.value); doFilter(e.target.value); }}
            // onChange={e => doFilter(e.target.value)}
              fullWidth
              defaultValue="all"
            >
              <MenuItem value="all">Priorty (all)</MenuItem>
              {
              jobPriorties?.map((priorty) => (
                <MenuItem key={priorty.id} value={priorty.id}>
                  {priorty.name}
                </MenuItem>
              ))
            }
            </TextField>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                {
                  columns?.map((column) => (
                    <th key={column?.name}>
                      {column?.name}
                      {
                        column.sortable && (
                          <CustomButton $gray className={`sortable ${tableSort?.name === column.selector ? 'active' : ''}`} onClick={() => sortColumn(column)}>
                            {
                              !(tableSort?.name === column.selector && tableSort?.order === 'asc') && (
                                <div className="sortableIcon">
                                  <KeyboardArrowUp />
                                </div>
                              )
                            }
                            {
                              !(tableSort?.name === column.selector && tableSort?.order === 'desc') && (
                                <div className="sortableIcon">
                                  <KeyboardArrowDown />
                                </div>
                              )
                            }
                          </CustomButton>
                        )
                      }
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                data?.length > 0 ? (
                  dataState?.length > 0 ? (
                    dataState.map((row) => (
                      <tr key={row?.id}>
                        {
                        columns?.map((column) => (
                          <td key={column.name + row.id} style={column?.tdStyle}>
                            {
                              column?.cell ? (
                                column.cell(row?.[column?.selector], row)
                              ) : (
                                row?.[column?.selector]
                              )
                            }
                          </td>
                        ))
                      }
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns?.length || '1'} style={{ textAlign: 'center' }}>
                        <h3>No results were found for your search.</h3>
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan={columns?.length || '1'} style={{ textAlign: 'center' }}>
                      <h3>Job List is empty</h3>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </TableWrapper>
    </>
  );
}

CustomTable.propTypes = {
  header: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, priorty: PropTypes.number })).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        selector: PropTypes.string.isRequired,
        // cell: PropTypes.func((value, row) => (PropTypes.node)),
        cell: PropTypes.func,
        tdStyle: PropTypes.objectOf(PropTypes.string),
      },
    ),
  ).isRequired,
};

CustomTable.defaultProps = {
  header: '',
};
