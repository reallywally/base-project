package com.wally.mall.repository;

import com.wally.mall.domain.Todo;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@Log4j2
@SpringBootTest
class TodoRepositoryTest {
    @Autowired
    private TodoRepository todoRepository;

    @Test
    public void testCreate() {
        for (int i = 1; i < 100; i++) {
            Todo todo = Todo.builder().title("title.." + i)
                    .dueDate(LocalDate.of(2024, 11, 1))
                    .writer("user00")
                    .build();

            todoRepository.save(todo);
        }
    }

    @Test
    public void testRead(){
        Long tno = 33L;

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        log.info(todo);
    }
}