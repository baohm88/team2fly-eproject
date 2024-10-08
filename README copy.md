## Quản lý user

- [ ]  [GET] admin/user/
    - [GET] admin/user/
        
        **Description**: Get user info
        
        ```json
        {
            "user_id": 123
        }
        ```
        
- [ ]  [PUT] admin/user/
    - [PUT] admin/user/
        
        **Description**: Change user info
        
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

## Quản lý product

- [x]  [GET] /admin/products/
- [ ]  [POST] /admin/products/
    - [POST] /admin/products/
        
        **Description**: Add new product
        
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
        
- [ ]  [PUT] /admin/products/
    - [PUT] /admin/products/
        
        **Description**: Update product info
        
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

# endpoint của user

## user

- [x]  [POST] /user/login
    - [POST] /user/login
        
        **Description**: User Login 
        
        ```json
        {
            "username": "user1",
            "password": "pass1"
        }
        ```
        
- [x]  [POST] /user/register/
    - [POST] /user/register/
        
        **Description**: User register
        
        ```json
        {
            "username": "john_doe",
            "password": "hashed_password_string",
            "first_name": "John",
            "last_name": "Doe",
            "dob": "1990-01-01",
            "phone": "+1234567890",
            "address": "1234 Elm Street, Springfield, USA",
            "user_image": "base64_encoded_image_string"
        }
        ```
        
- [ ]  [DELETE] /user/profile/
    - [DELETE] /user/profile/
        
        **Description**: Deactive user account
        
        ```json
        {
            "user_id": 123
        }
        ```

- [ ]  [GET] /user/profile/
    - [GET] /user/profile/
        
        **Description**: get user account info
        
        ```json
        {
            "user_id": 123
        }
        ```

- [ ]  [POST] /user/change_password/
    - [POST] /user/change_password/
        
        **Description**: change User password
        
        ```json
        {
            "user_id": 123,
            "current_password": "current password",
            "new_password": "new password"
        }
        ```


- [ ]  [PUT] /user/profile/
    - [PUT] /user/profile/
        
        **Description**: Change user info
        
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

## Products

- [ ]  [PUT] /collections/all

## Orders

## Coupons

## Order Status

## Order Item

## Product Image

## Product Rating

## Product Category