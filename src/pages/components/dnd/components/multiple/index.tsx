/*
 * @Author: busyzz
 * @Date: 2021-09-03 15:26:30
 * @Description:
 */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reorder, move } from '../utils';
import styles from './index.module.scss';
export enum DroppableIdNum {
  TODO = 'todo',
  DONE = 'done',
}
export type ItemType = {
  message: string;
};
const todoListData: ItemType[] = [
  { message: '洗漱' },
  { message: '坐车' },
  { message: '上班' },
  { message: '吃饭' },
  { message: '下班' },
  { message: '睡觉' },
];
const doneListData: ItemType[] = [{ message: '起床' }];
const Multiple = () => {
  const [todoList, setTodoList] = useState(todoListData);
  const [doneList, setDoneList] = useState(doneListData);
  const getList = (id) => {
    const idMap = {
      todo: todoList,
      done: doneList,
    };
    return idMap[id];
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;
    // 如果放到列表以外的地方 直接返回
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder<ItemType>(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      if (source.droppableId === 'todo') {
        setTodoList(items);
      } else {
        setDoneList(items);
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setTodoList(result.todo);
      setDoneList(result.done);
    }
  };
  return (
    <div className={styles.wrapper}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={DroppableIdNum.TODO}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? '#e6f7ff' : '#fff',
              }}
              className={styles.container}
            >
              <div className={styles.title}>To do</div>
              <div className={styles.list}>
                {todoList.map((item, index) => (
                  <Draggable
                    key={item.message}
                    draggableId={item.message}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className={styles.item}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          background: snapshot.isDragging ? '#ddd' : '#fff',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.message}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId={DroppableIdNum.DONE}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? '#e6f7ff' : '#fff',
              }}
              className={styles.container}
            >
              <div className={styles.title}>Done</div>
              <div className={styles.list}>
                {doneList.map((item, index) => (
                  <Draggable
                    key={item.message}
                    draggableId={item.message}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className={styles.item}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          background: snapshot.isDragging ? '#ddd' : '#fff',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.message}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Multiple;
