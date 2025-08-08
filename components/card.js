export function createCard({ title = "Thumbnail", text = "", time = "9 mins" } = {}) {
  const template = document.createElement("template");
  template.innerHTML = `
    <article class="card">
      <div class="card-thumb">${title}</div>
      <div class="card-body">
        <p class="card-text">${text}</p>
        <div class="card-actions">
          <div class="action-buttons">
            <button class="btn btn-sm btn-outline">View</button>
            <button class="btn btn-sm btn-outline">Edit</button>
          </div>
          <small class="text-muted">${time}</small>
        </div>
      </div>
    </article>
  `;
  return template.content.firstElementChild;
}
