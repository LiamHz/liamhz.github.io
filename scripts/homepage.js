 // Toggle details on a per section basis, so that only one can be open at a time
["books", "movies", "artists"].forEach(category =>
  [...document.querySelectorAll(`#${category} details`)].forEach( (D,_,A) =>
    D.addEventListener("toggle", E =>
      D.open && A.forEach(d =>
        d!=E.target && (d.open=false)
      )
    )
  )
)

// Change displayed div in influence section to match selected nav item
const changeInfluenceContent = contentId => {
  const prevActiveNavItem = document.querySelector("#influences nav a.active")
  const targetNavItem = document.querySelector(`#influences nav a.${contentId}`)

  const prevActiveContent = document.getElementsByClassName("active-influence-content")[0]
  const targetContent = document.getElementById(contentId)

  prevActiveNavItem.classList.remove("active")
  targetNavItem.classList.add("active")

  prevActiveContent.classList.remove("active-influence-content")
  targetContent.classList.add("active-influence-content")
}

// Change displayed image to match whatever image is being hovered over
const displayImage = document.getElementById("display-img")

document.addEventListener('mouseover', e => changeActiveImage(e))

const changeActiveImage = e => {
  const target = e.target;

  // Check if the target is an image element
  if (target.tagName.toLowerCase() === 'img' && target.id !== "display-img") {
    displayImage.src = target.src;

    prevActiveThumbnail = document.querySelector("#img-grid img.active")
    prevActiveThumbnail.classList.remove("active")
    e.target.classList.add("active")
  }
}
