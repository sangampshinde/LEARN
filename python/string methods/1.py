course ="Python Programming"

# python method
# len()
print(course.upper())
print(course)
print(course.lower())
# title case
course ="python programming"
print(course.title())
#strip()/lstrip()/rstrip() method to remove whitespace from starting and ending
course ="  Python Programming"
print(course.strip())
course ="Python Programming   "
print(course.strip())
course ="   Python Programming   "
print(course.strip())

#find() (if find return index) or return -1
print(course.find("Pro"))
print(course.find("pro"))

#replace()
print(course.replace("Python", "Java"))
print(course)

# in operator true/false

print("Python" in course)
print("Python" not in course)


