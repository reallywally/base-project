package com.wally.mall.controller;

import com.wally.mall.dto.PageRequestDTO;
import com.wally.mall.dto.PageResponseDTO;
import com.wally.mall.dto.TodoDTO;
import com.wally.mall.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping("/api/todo") // 나중에 todos로 수정
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping("{tno}")
    public TodoDTO get(@PathVariable Long tno) {
        return todoService.get(tno);
    }

    @GetMapping("/list")
    public PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO) {
        log.info(pageRequestDTO);

        return todoService.list(pageRequestDTO);
    }
}
