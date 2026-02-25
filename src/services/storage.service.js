const ImageKit = require('@imagekit/nodejs');

async function uploadFile(file, fileName) {
    console.log("IMAGEKIT KEY:", process.env.IMAGEKIT_API_KEY)
    const imagekit = new ImageKit({
        privateKey: process.env.IMAGEKIT_API_KEY || "placeholder_key",
    });
    const result = await imagekit.files.upload({
        file: file.toString("base64"),
        fileName: fileName
    })
    return result
}
module.exports = uploadFile
