package com.wally.mall.service;

import com.wally.mall.dto.TodoDTO;

public interface TodoService {
    Long register(TodoDTO todoDTO);

    TodoDTO get(Long tno);

    void modify(TodoDTO todoDTO);

    void remove(Long tno);
}
