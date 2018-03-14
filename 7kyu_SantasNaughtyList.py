def find_children(List, children):
  good_kids = [];

  for child in children:
    if child in List and child not in good_kids:
      good_kids.append(child)

  return sorted(good_kids)
