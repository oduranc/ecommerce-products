const images = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  filename: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Image", imageSchema);
