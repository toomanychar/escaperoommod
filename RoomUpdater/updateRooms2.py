import os

# How to use it:
# 1. Put the html room files you want to update (by adding text) into the roomToBeUpdated
# 2. Set searchedText into the text after which to input the text you want
# 3. Set addedText to the text you want to add
# 4. If you want, change the viewLength - this length will be shown to you around the text you have added. 
#    You can also disable manual room approval by setting manuallyApprove to False.
# 5. Run the script. Approve rooms you want to change, unapprove those you don't. The unapproved rooms will be listed at the end

def cls(): # Function to clear console output
    os.system('cls' if os.name=='nt' else 'clear')

fileList = os.listdir("roomsToBeUpdated")

searchedText = "width:1000px; height:500px;" # After the first occurance of this text, addedText will be added

viewLength = 400 # The length of the view you are going to get into every file when you approve them
manuallyApprove = False # Change this to False if you don't want to manually approve each file
approved = "y"

unapprovedFiles = []

for fileName in fileList:
	with open("roomsToBeUpdated/" + fileName, 'r') as f:
		rawText = "".join(f.readlines())
		
		if not (searchedText in rawText): # If the searchedText isn't in the fullText, we can't add the addedText, so we send this file to the unapprovedFiles
			unapprovedFiles.append([fileName, "searchedText not found"])
			continue
		
		# The text that will be added to each file
		addedText = "width:1000px; height:562px; "

		
		index = rawText.find(searchedText) + len(searchedText) # Index where addedText will be added
		textLeft = rawText[:index-len(searchedText)]
		textRight = rawText[index:]
		newText = textLeft + addedText + textRight
		
		
		if manuallyApprove:
			cls()
			print(newText[index-viewlength//2:index+viewlength//2])
			print("-"*50)
			approved = input(" | Approve file " + fileName + "? (y/n) ")
		if approved == "y" or approved == "yes" or approved == "Y":
			with open("updatedRooms/" + fileName, 'w') as f2:
				f2.write(newText)
		else:
			unapproved.append([fileName, "Manually rejected"])

if unapprovedFiles:
	print("The following files have been unapproved:")
	print("------------------------------------------")
	for nameReason in unapprovedFiles:
		print("Filename:"  + nameReason[0])
		print("Reason:"  + nameReason[1])
		print("------------------------------------------")
