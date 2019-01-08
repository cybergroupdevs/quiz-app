module.exports = function timestamp(schema) {
  // Add the two fields to the schema
  schema.add({
    createdAt: Date,
    updatedAt: Date
  })

  // TODO pre-save is not called for update. So this piece of code needs to be
  // modified in the future
  // Create a pre-save hook
  schema.pre('save', function (next) {
    let now = new Date()

    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
    // Call the next function in the pre-save chain
    next()
  })
}