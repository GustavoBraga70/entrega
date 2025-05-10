//Oi, Gustavo! Estava dando uma olhada no seu código e, realmente, ficou muito bom. 
//Como estou estudando Python agora, pensei em mostrar como ficaria a versão dele em Python. 
//Vai ser uma ótima chance de treinar mais e também compartilhar um pouco do meu conhecimento com você.

nota1 = float(input("Digite a nota de sua primeira avaliação: "))
nota2 = float(input("Digite a nota de sua segunda avaliação: "))

mencao = (nota1 + nota2) / 2

// Verifica se a média está dentro do intervalo válido.
if mencao < 0 or mencao > 10:
    print("Essa menção não é válida para a execução do programa.")
else:
    // Arredonda a média para facilitar a comparação.
    arredondado = int(mencao)  # Arredondando para inteiro

    // Estrutura if-elif-else para determinar a menção.
    if arredondado == 0:
        print(f"Sua menção final é {mencao} = Sem Rendimento (SR).")
    elif arredondado == 1 or arredondado == 2:
        print(f"Sua menção final é {mencao} = Inferior (II).")
    elif arredondado == 3 or arredondado == 4:
        print(f"Sua menção final é {mencao} = Médio Inferior (MI).")
    elif arredondado == 5 or arredondado == 6:
        print(f"Sua menção final é {mencao} = Médio (MM).")
    elif arredondado == 7 or arredondado == 8:
        print(f"Sua menção final é {mencao} = Médio Superior (MS).")
    elif arredondado == 9 or arredondado == 10:
        print(f"Sua menção final é {mencao} = Superior (SS).")
