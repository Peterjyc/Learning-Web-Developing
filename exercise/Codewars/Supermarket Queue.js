function queueTime(customers, n) {
 let tills = Array(n).fill(0)
  customers.forEach(customer => {
    let idx = tills.indexOf(Math.min(...tills))
    tills[idx] += customer
  })
  return Math.max(...tills)
}
