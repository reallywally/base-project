package com.wally.mall.service;

import org.springframework.transaction.annotation.Transactional;
import com.wally.mall.dto.PageRequestDTO;
import com.wally.mall.dto.PageResponseDTO;
import com.wally.mall.dto.ProductDTO;

@Transactional
public interface ProductService {

    PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);

    Long register(ProductDTO productDTO);

    ProductDTO get(Long pno);

    void modify(ProductDTO productDTO);

    void remove(Long pno);

}