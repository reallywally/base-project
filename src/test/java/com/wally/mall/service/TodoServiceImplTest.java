package com.wally.mall.service;

import com.wally.mall.dto.PageRequestDTO;
import com.wally.mall.dto.PageResponseDTO;
import com.wally.mall.dto.TodoDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@Log4j2
@SpringBootTest
class TodoServiceImplTest {

    @Autowired
    private TodoService todoService;

    @Test
    public void testRegister(){
        TodoDTO todoDTO = TodoDTO.builder()
                .title("타이틀")
                .writer("user11")
                .dueDate(LocalDate.of(2024, 11, 3))
                .build();

        Long tno = todoService.register(todoDTO);

        log.info(tno);
    }

    @Test
    public void testGet(){
        Long tno = 100L;
        TodoDTO todoDTO = todoService.get(tno);
        log.info(todoDTO);
    }

    @Test
    public void testList(){
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(2).size(10).build();

        PageResponseDTO<TodoDTO> response = todoService.list(pageRequestDTO);

        log.info(response);
    }
}