# and 
# or 
# not

high_income = True
good_credit_score = True
student = True

if high_income and good_credit_score:
    print("Eligible for loan")
else:
    print("Not eligible for loan")

# or

if high_income or good_credit_score:
    print("Eligible for loan")
else:
    print("Not eligible for loan")

# not
if not student:
    print("Eligible for loan")
else:
    print("Not eligible for loan")

# 
if (high_income or good_credit_score) and (not student):
    print("Eligible for loan")
else:
    print("Not eligible for loan")

# short circuit statement
if high_income and good_credit_score and not student:
    print("Eligible for loan")
else:
    print("Not eligible for loan")

# or operator
if high_income or good_credit_score or not student:
    print("Eligible for loan")
else:
    print("Not eligible for loan")


# chaning  Comparison

age=22

if age>=18 and age<65:
    print("Eligible for driving")

if 18 <= age < 65:
    print("Eligible for driving")
