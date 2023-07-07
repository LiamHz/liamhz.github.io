["books", "movies", "artists"].forEach(category => // Toggle details on a per section basis
  [...document.querySelectorAll(`#${category} details`)].forEach( (D,_,A) =>
    D.addEventListener("toggle", E =>
      D.open && A.forEach(d =>
        d!=E.target && (d.open=false)
      )
    )
  )
)



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

// TODO Define function changeDisplayImage