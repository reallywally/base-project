package com.wally.mall.domain;


import com.wally.mall.dto.TodoDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Entity
@Table(name = "tbl_todo")
@Getter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;
    private String title;
    private String writer;
    private boolean complete;
    private LocalDate dueDate;

    public void update(TodoDTO todoDTO) {
        this.title = todoDTO.getTitle();
        this.dueDate = todoDTO.getDueDate();
        this.complete = todoDTO.isComplete();
    }
}
