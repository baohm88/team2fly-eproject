# API Documentation

## Quản lý User

- [ ] **[GET] admin/user/**
  - **Description**: Get user info
  - **Request Example**:
    ```json
    {
      "user_id": 123
    }
    ```

- [ ] **[PUT] admin/user/**
  - **Description**: Change user info
  - **Request Example**:
    ```json
    {
      "user_id": 123,
      "password": "hashed_password_string",
      "is_active": 1,
      "first_name": "John",
      "last_name": "Doe",
      "dob": "1990-01-01",
      "phone": "+1234567890",
      "address": "1234 Elm Street, Springfield, USA",
      "user_image": "base64_encoded_image_string"
    }
    ```

## Quản lý Product

- [ ] **[GET] /admin/products/**
- [ ] **[POST] /admin/products/**
  - **Description**: Add new product
  - **Request Example**:
    ```json
    {
      "product_id": 123,
      "product_name": "Sample Product",
      "price": 99.999999999,
      "quantity_in_stock": 50,
      "category": 1,
      "date_listed": "2024-10-05"
    }
    ```

- [ ] **[PUT] /admin/products/**
  - **Description**: Update existing product
  - **Request Example**:
    ```json
    {
      "product_id": 123,
      "product_name": "Sample Product",
      "price": 99.999999999,
      "quantity_in_stock": 50,
      "category": 1,
      "date_listed": "2024-10-05"
    }
    ```

# Endpoint của User

## User

- [x] **[POST] /user/login**
  - **Description**: User login
  - **Request Example**:
    ```json
    {
      "username": "user1",
      "password": "pass1"
    }
    ```

- [x] **[POST] /user/register/**
  - **Description**: User register
  - **Request Example**:
    ```json
    {
      "username": "john_doe",
      "password": "hashed_password_string",
      "first_name": "John",
      "last_name": "Doe",
      "dob": "1990-01-01",
      "phone": "+1234567890",
      "address": "1234 Elm Street, Springfield, USA",
      "buyer_image": "base64_encoded_image_string"
    }
    ```

- [x] **[GET] /user/profile/**
  - **Description**: Get current user info
  - **Request Example**:
    ```json
    {
      "user_id": 123
    }
    ```

- [x] **[PUT] /user/profile/**
  - **Description**: Change user info
  - **Request Example**:
    ```json
    {
      "user_id": 123,
      "password": "hashed_password_string",
      "is_active": 1,
      "first_name": "John",
      "last_name": "Doe",
      "dob": "1990-01-01",
      "phone": "+1234567890",
      "address": "1234 Elm Street, Springfield, USA",
      "buyer_image": "base64_encoded_image_string"
    }
    ```

## Products

- [ ] **[GET] /collections/skincare/**
  - **Request Example**:
    ```json
    {
      "products": [
        {
          "product_id": 1,
          "product_name": "abc",
          "description": "asdasdas",
          "product_price": 99.99,
          "quantity": 1,
          "main_category": "skincare",
          "sub_category": "abc"
        },
        {
          "product_id": 2,
          "product_name": "abc",
          "description": "asdasdas",
          "product_price": 99.99,
          "quantity": 1,
          "main_category": "skincare",
          "sub_category": "abc"
        }
      ],
      "max_price": 1,
      "min_price": 0,
      "order_by": "name||price",
      "offset": 1 // int
    }
    ```

- [ ] **[GET] products/product/?product_id=123**
  - **Request Example**:
    ```json
    {
      "product_name": "abc",
      "description": "asdasdas",
      "product_price": 99.99,
      "quantity": 1,
      "main_category": "skincare",
      "sub_category": "abc",
      "images": [
        "imagelink1",
        "imagelink2",
        "imagelink3",
        "imagelink4"
      ],
      "ratings": [
        {
          "username": "doe",
          "rating_date": "2020-12-20",
          "rating": 5,
          "rating_comment": "asdasdas"
        },
        {
          "username": "doe",
          "rating_date": "2020-12-20",
          "rating": 5,
          "rating_comment": "asdasdas"
        }
      ]
    }
    ```

## Orders

- [ ] **[GET] /user/orders/?user_id=123**
  - **Request Example**:
    ```json
    {
      "orders": [
        {
          "order_id": 1,
          "order_value": 99.99,
          "order_date": "2020-10-10",
          "status": "pending"
        },
        {
          "order_id": 2,
          "order_value": 99.99,
          "order_date": "2020-10-10",
          "status": "pending"
        }
      ]
    }
    ```

- [ ] **[POST] /user/orders**
  - **Request Example**:
    ```json
    {
      "user_id": 123,
      "order_value": 90.99,
      "cart_items": [
        {
          "product_id": 1,
          "product_name": "abc",
          "product_price": 99.99,
          "quantity": 1
        },
        {
          "product_id": 2,
          "product_name": "abc",
          "product_price": 99.99,
          "quantity": 1
        },
        {
          "product_id": 3,
          "product_name": "abc",
          "product_price": 99.99,
          "quantity": 1
        }
      ]
    }
    ```

- [ ] **[PUT] /user**
  - **Request Example**:
    ```json
    {
      "order_id": 123,
      "status": 1 | 2 | 3
    }
    ```

## Order Item

- [ ] **[GET] user/order_item/?order_id=123**
  - **Request Example**:
    ```json
    {
      "order_items": [
        {
          "product_name": "abc",
          "product_price": 99.99,
          "quantity": 90
        },
        {
          "product_name": "assc",
          "product_price": 99.99,
          "quantity": 90
        }
      ]
    }
    ```

## Coupons

## Order Status

## Product Image

## Product Rating

## Product Category
