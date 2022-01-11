package com.example.ecommerce.config;

import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        HttpMethod[] notSupportedHTTPMethods = {
                HttpMethod.PUT,
                HttpMethod.DELETE,
                HttpMethod.POST
        };

        /* For /product endpoint. */
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(notSupportedHTTPMethods))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(notSupportedHTTPMethods)));
        /* For /product-category endpoint. */
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(notSupportedHTTPMethods))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(notSupportedHTTPMethods)));
    }
}