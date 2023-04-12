function filter_list(l) {
    return l.filter(el => el >= 0 && Number.isInteger(el))
  }
