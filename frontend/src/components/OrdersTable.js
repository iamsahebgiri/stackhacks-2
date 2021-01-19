import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Badge,
  Flex,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import { useTable, useSortBy } from "react-table";
import clsx from "clsx";
import EditOrderModal from "./EditOrderModal";

function OrdersTable({ n = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = React.useMemo(
    () => [
      {
        foodItem: "Veg Burger",
        orderedBy: "Rahul Singhania",
        status: "Pending",
        edit: "Edit",
      },
      {
        foodItem: "Freddie's BBQ",
        orderedBy: "Saheb Giri",
        status: "Finished",
        edit: "Edit",
      },
      {
        foodItem: "Domino's Pizza",
        orderedBy: "Sunil Singhania",
        status: "Cooking",
        edit: "Edit",
      },
      {
        foodItem: "Freddie's BBQ",
        orderedBy: "Saheb Giri",
        status: "Finished",
        edit: "Edit",
      },
      {
        foodItem: "Domino's Pizza",
        orderedBy: "Sunil Singhania",
        status: "Cooking",
        edit: "Edit",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodItem",
      },
      {
        Header: "Ordered by",
        accessor: "orderedBy",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Edit",
        accessor: "edit",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <>
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <Flex>
                  {column.render("Header")}
                  <chakra.span pl="1">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon as={IoCaretDown} />
                      ) : (
                        <Icon as={IoCaretUp} />
                      )
                    ) : null}
                  </chakra.span>
                </Flex>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.slice(n).map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => (
                <Td {...cell.getCellProps()}>
                  {i === 2 ? (
                    <Badge
                      colorScheme={clsx(
                        cell.value.toLowerCase() === "pending" && "red",
                        cell.value.toLowerCase() === "finished" && "green",
                        cell.value.toLowerCase() === "cooking" && "yellow"
                      )}
                    >
                      {cell.render("Cell")}
                    </Badge>
                  ) : i === 3 ? (
                    <Button size="xs" onClick={onOpen}>Edit</Button>
                  ) : (
                    cell.render("Cell")
                  )}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
    <EditOrderModal onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default OrdersTable;
