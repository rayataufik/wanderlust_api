Wanderlust API Documentation
============================

GET /api/contents
-----------------

Retrieves a list of all content items.

### Example Request:

          GET /api/contents HTTP/1.1
          Host: localhost:3000
  

### Example Response:

          {
            "message": "Items retrieved successfully",
            "data": \[
              {
                "id": "XIvaZb3KDn21oDNeWJR2r",
                "title": "Sample Title",
                "image\_url": "http://example.com/image.png",
                "description": "Sample Description"
              }
            \]
          }
  

GET /api/contents/{id}
----------------------

Retrieves a single content item by ID.

### Example Request:

          GET /api/contents/XIvaZb3KDn21oDNeWJR2r HTTP/1.1
          Host: localhost:3000
    

### Example Response:

          {
            "message": "Item retrieved successfully",
            "data": {
              "id": "XIvaZb3KDn21oDNeWJR2r",
              "title": "Sample Title",
              "image\_url": "http://example.com/image.png",
              "description": "Sample Description"
            }
          }
    

POST /api/contents/create
-------------------------

Creates a new content item. Requires title, image\_url, and description in the request body.

### Example Request:

          POST /api/contents/create HTTP/1.1
          Host: localhost:3000
          Content-Type: application/json

          {
            "title": "New Title",
            "image\_url": "http://example.com/newimage.png",
            "description": "New description of the item"
          }
    

### Example Response:

          {
            "message": "Item created successfully",
          }
    

PUT /api/contents/{id}
----------------------

Updates an existing content item by ID. Requires title, image\_url, and description in the request body.

### Example Request:

          PUT /api/contents/XIvaZb3KDn21oDNeWJR2r HTTP/1.1
          Host: localhost:3000
          Content-Type: application/json
  
          {
            "title": "Updated Title",
            "image\_url": "http://example.com/updatedimage.png",
            "description": "Updated description of the item"
          }
      

### Example Response:

          {
            "message": "Item updated successfully",
          }
      

DELETE /api/contents/{id}
-------------------------

Deletes a content item by ID.

### Example Request:

          DELETE /api/contents/XIvaZb3KDn21oDNeWJR2r HTTP/1.1
          Host: localhost:3000
      

### Example Response:

          {
            "message": "Item deleted successfully"
          }
