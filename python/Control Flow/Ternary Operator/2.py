age = 12
if age>=18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")

# ----------------------------------------------------------------
if age>=18:
    message = "You are eligible to vote."
else:
    message = "You are not eligible to vote."

print(message)

# ----------------------------------------------------------------
message = "eligible to vote" if age>=18 else "You are not eligible to vote"
print(message)
