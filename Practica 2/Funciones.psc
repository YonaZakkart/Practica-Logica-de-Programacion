Funcion retornarResta <- Resta (num1, num2)
	retornarResta = num1 - num2
FinFuncion

Funcion retornarSuma <- Sumar (num1, num2)
	retornarSuma = num1 + num2
FinFuncion

Algoritmo Funciones
	Definir numero1, numero2, opciones como numero
	Escribir "Por favor, ingrese el primer n�mero: "
	Leer numero1
	Escribir "Por favor, ingrese el segundo n�mero: "
	Leer numero2
	
	Escribir "Por favor, eliga una opci�n"
	Escribir "1- Sumar o 2- Restar"
	Leer opciones
	
	Si opciones = 1 Entonces
		Escribir "La suma de los n�meros es: ", Sumar(numero1, numero2)
	FinSi
	
	Si opciones = 2 Entonces
		Escribir "La resta de los n�meros es: ", Resta(numero1, numero2)
	FinSi
FinAlgoritmo
