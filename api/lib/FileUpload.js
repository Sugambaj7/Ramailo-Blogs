const multer = require("multer");

class FileUpload {
  custom_upload(destination = "uploads/") {
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `public/${destination}`);
      },
      filename: function (req, file, cb) {
        let fileName = file.originalname.trim();
        let imageName =
          Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + fileName;
        cb(null, imageName);
      },
    });
    return multer({ storage: this.storage });
  }
}
module.exports = FileUpload;
