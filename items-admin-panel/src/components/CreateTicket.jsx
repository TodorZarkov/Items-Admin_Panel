export function CreateTicket() {
    return(
        <form className="create-form" action="">
        <div className="create-input-wrapper">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="create-input-wrapper description">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description" />
        </div>
        <div className="create-form-buttons">
          <button className="btn login" type="button">Back</button>
          <button className="btn register" type="submit">Create</button>
        </div>
        <div className="create-input-wrapper">
          <label htmlFor="type">Type:</label>
          <select name="type" id="type" >
            <option value="bug">Bug</option>
            <option value="bug">Unit</option>
            <option value="bug">Currency</option>
            <option value="bug">Category</option>
          </select>
        </div>
        <div className="create-input-wrapper">
          <input className="file-input" type="file" >
          </input>
        </div>
      </form>
    );
}