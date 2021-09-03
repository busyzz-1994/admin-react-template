/*
 * @Author: busyzz
 * @Date: 2021-09-03 14:50:20
 * @Description:
 */
import { CSSProperties } from 'react';
import { DroppableIdNum, ItemType as MulItemType } from './multiple';
interface ItemType {
  id: string;
  content: string;
}
export const getItems = (count): ItemType[] =>
  Array.from({ length: count }, (_, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

export const reorder = <T = ItemType>(list, startIndex, endIndex): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result as T[];
};
export const grid = 8;

export const getItemStyle = (isDragging, draggableStyle): CSSProperties => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

export const getListStyle = (isDraggingOver): CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

export const getListStyleInHorizontal = (isDraggingOver): CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

export const getItemStyleInHorizontal = (
  isDragging,
  draggableStyle
): CSSProperties => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {} as Record<DroppableIdNum, MulItemType[]>;
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
