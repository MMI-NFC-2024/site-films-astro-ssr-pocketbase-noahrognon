/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "file762383602",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "poster",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("file762383602")

  return app.save(collection)
})
