function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

let tz = [-1200, -1130, -1100, -1030, -1000, -930, -900, -830, -800, -730, -700, -630,-600, -530, -500, -430, -400, -330, -300, -230, -200, -130, -100, -30, 0, 30, 130, 200,230,300,330,400,430,500,530,600,630,700,730,800,830,900, 930, 1000, 1030, 1100, 1130,1200]
let time = ['00:00:00','00:30:00','01:00:00','01:30:00','02:00:00','02:30:00','03:00:00','03:30:00','04:00:00','04:30:00','05:00:00','05:30:00','06:00:00','06:30:00','07:00:00','07:30:00','08:00:00','08:30:00','09:00:00','09:30:00','10:00:00','10:30:00','11:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00','14:00:00','14:30:00','15:00:00','15:30:00','16:00:00','16:30:00','17:00:00','17:30:00','18:00:00','18:30:00','19:00:00','19:30:00','20:00:00','20:30:00','21:00:00','21:30:00','22:00:00','22:30:00','23:00:00','23:30:00','00:00:00','00:30:00','01:00:00','01:30:00','02:00:00','02:30:00','03:00:00','03:30:00','04:00:00','04:30:00','05:00:00','05:30:00','06:00:00','06:30:00','07:00:00','07:30:00','08:00:00','08:30:00','09:00:00','09:30:00','10:00:00','10:30:00','11:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00','14:00:00','14:30:00','15:00:00','15:30:00','16:00:00','16:30:00','17:00:00','17:30:00','18:00:00','18:30:00','19:00:00','19:30:00','20:00:00','20:30:00','21:00:00','21:30:00','22:00:00','22:30:00','23:00:00','23:30:00','00:00:00','00:30:00','01:00:00','01:30:00','02:00:00','02:30:00','03:00:00','03:30:00','04:00:00','04:30:00','05:00:00','05:30:00','06:00:00','06:30:00','07:00:00','07:30:00','08:00:00','08:30:00','09:00:00','09:30:00','10:00:00','10:30:00','11:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00','14:00:00','14:30:00','15:00:00','15:30:00','16:00:00','16:30:00','17:00:00','17:30:00','18:00:00','18:30:00','19:00:00','19:30:00','20:00:00','20:30:00','21:00:00','21:30:00','22:00:00','22:30:00','23:00:00','23:30:00']
let can_tz = input("Enter candidate's timezone")
let can_index = tz.index(int(can_tz))
let can_index_copy = can_index
let rec_tz = input("Enter recruiter's timezone")
let rec_index = tz.index(int(rec_tz))
let rec_index_copy = rec_index
let hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
let can_slot = [None for i in range(144)]
let rec_slot = [None for i in range(144)]
let temp=[]
let inp = input("Autofill timeslots of candidate and recruiter? (y/n)")

let bool = [True, False]
if (inp == 'y'){
    for(i=0;i<48;i++){
        can_slot.insert(can_index, random.choice(bool))
        can_index=can_index+1}
    for(i=0;i<48;i++){
        rec_slot.insert(rec_index, random.choice(bool))
        rec_index=rec_index+1}
}
else {
    inp = 0
    for(i=0;i<48;i++) {
        can_slot.insert(can_index, False)
        can_index = can_index + 1
        rec_slot.insert(rec_index, False)
        rec_index = rec_index + 1
    }
    while (inp != 'n'){
        inp = input("Enter hours in which candidate is busy, enter 'n' to terminate")
        if (inp != 'n'){
            can_slot[int(inp) * 2 + can_index_copy] = True}}
    inp = 'y'
    while (inp != 'n'){
        inp = input("Enter hours in which recruiter is busy, enter 'n' to terminate")
        if (inp != 'n'){
            rec_slot[int(inp) * 2 + rec_index_copy] = True
        }}
}
let index = 0
inp = input("Time slots w.r.t \n'1' Candidate \n'2' EST \n'3' Recruiter\n  ")
if(inp=='1'){ index = can_index_copy }
else if(inp=='3'){ index = rec_index_copy}
print("Time slots free are :")
for(i,j in zip(can_slot,rec_slot)){
    if(i == j == False){
        if(index<48){ print("previous day ::: "+time[index] + ' to ' + time[index+1])}
        else if(index<96){print("current day ::: "+time[index] + ' to ' + time[index+1])}
        else{print("next day ::: "+time[index] + ' to ' + time[index+1])}
    index = index + 1}}





