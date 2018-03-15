def find_children(List, children):
  good_kids = [];

  for child in children:
    if child in List and child not in good_kids:
      good_kids.append(child)

  return sorted(good_kids)

# tried this one with JavaScript with a correct solution but it didn't pass the random tests only
# the sample tests provided
# purpose of this kata is to return chilrens' names that were in the arrays of both List and
# children without duplication

# L2: create new arry to hold list of childrens' names matching both arrays
# L4: loop child in children array
# L5: if that same child in children array is in List array and not in the new good_kids array then
# L6: add that child to the good_kids array
# L8: and return the good_kids array sorted aphabetically
