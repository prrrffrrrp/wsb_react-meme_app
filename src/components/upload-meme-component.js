export default function UploadMeme() {
    return <div>
        <h1>Upload your own memes</h1>
        <form>
            <label>
                title: 
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Upload" />
        </form>
    </div>
}
