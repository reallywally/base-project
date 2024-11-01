package com.wally.mall.service;

import com.wally.mall.dto.PageRequestDTO;
import com.wally.mall.dto.PageResponseDTO;
import com.wally.mall.dto.TodoDTO;

public interface TodoService {
    Long register(TodoDTO todoDTO);

    TodoDTO get(Long tno);

    void modify(TodoDTO todoDTO);

    void remove(Long tno);

    PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO);
}
