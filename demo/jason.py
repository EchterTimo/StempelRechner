TIME_TO_ADD = 7.75

time: str = input("Gib die Startzeit ein: ")
time = time.split(":")
hrs: int = int(time[0])
min: int = int(time[1])

decimaltime: float = hrs + min/60
decimalendtime = decimaltime + TIME_TO_ADD

floatfirst = int(decimalendtime)
floatlast = decimalendtime - floatfirst
floatlastmins = floatlast * 60

endtime = f"{floatfirst}:{int(floatlastmins)}"
print(f"Deine Endzeit heute ist: {endtime}")

input("Drücke eine Taste zum beenden")
 