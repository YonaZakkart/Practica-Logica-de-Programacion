Algoritmo CrearUsuario
	Definir NombreCompleto, Correo, Password Como Cadena
	Definir arrobaValidation, inicial, error Como Entero
	
	Escribir "Por favor ingrese su nombre completo"
	Leer NombreCompleto
	
	Si Longitud(NombreCompleto) < 3 Entonces
		Escribir "El nombre debe tener al menos 3 caracteres"
		error <- 1
	FinSi
	
	Escribir "Por favor ingrese su correo electronico"
	Leer Correo
	
	Para inicial <- 1 Hasta Longitud(Correo) Hacer
		
		Si Subcadena(Correo,inicial,inicial) = "@" Entonces
			arrobaValidation <- 1
		FinSi
	FinPara
	
	Si arrobaValidation = 0 Entonces
		Escribir "Por favor ingrese un correo valido"
		error <- 1
	FinSi
	
	Escribir "Por favor escriba su contrasenia"
	Leer Password
	
	Si Longitud(Password) < 8 Entonces
		Escribir  "La contrasenia debe tener mas de 8 caracteres"
		error <- 1
	FinSi
	
	Si error > 0 Entonces
		
		Escribir "Debe cumplir con todas las validaciones para poder registrase"
	FinSi
	
	Si error = 0 Entonces
		
		Escribir "Registro exitoso"
		Escribir NombreCompleto
		Escribir Correo
		Escribir Password
	FinSi
FinAlgoritmo
