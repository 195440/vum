export default {
  extend (a, b) {
    for (var i in b) {
      if (b.hasOwnProperty(i)) {
        a[i] = b[i]
      }
    }
  }
}
