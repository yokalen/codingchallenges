// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

//P: Strings with numbers mistakenly included
//R: Strings with mistakes corrected
//E: L0NDON => LONDON
//   DUBL1N => DUBLIN
//   S1NGAP0RE => SINGAPORE
//   BUDAPE5T => BUDAPEST
//P:
//Take out every 5 and replace with an S
//Take out every 0 and replace with an O
//Take our every 1 and replace with an I
//Return the corrected string

function correct(string)
{
	return string.split('5').join('S').split('0').join('O').split('1').join('I')
}