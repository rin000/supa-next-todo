'use client';

import TodoList from '@/components/ui/TodoList';
import useTodosController from '../hooks/useTodosController';
import React from 'react';

interface TodoContainerPrpps {
  owerUserId?: string;
}

const TodoContainer = ({ owerUserId }: TodoContainerPrpps) => {
  const { loading, todos, onCreateEmptyTodos, onDeleteTodos, onSearchTodos, onUpdateTodos } =
    useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        owerUserId={owerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
