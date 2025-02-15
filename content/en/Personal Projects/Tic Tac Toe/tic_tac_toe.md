```yaml
import random

def print_board(board):
    for i in range(0, 9, 3):
        print(f"{board[i]} | {board[i+1]} | {board[i+2]}")
        if i < 6:
            print("--+---+--")

def check_winner(board, player):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6]              # diagonals
    ]
    for condition in win_conditions:
        if all(board[i] == player for i in condition):
            return True
    return False

def is_full(board):
    return all(cell != ' ' for cell in board)

def computer_move(board):
    # This is a simple random strategy for the computer
    available_moves = [i for i in range(9) if board[i] == ' ']
    return random.choice(available_moves)

def tic_tac_toe():
    board = [' ' for _ in range(9)]
    current_player = 'X'  # You are 'X'
    
    while True:
        print_board(board)
        
        if current_player == 'X':  # Player's turn
            move = int(input("Your move (1-9): ")) - 1
            if board[move] != ' ':
                print("That space is already taken. Try again.")
                continue
            board[move] = 'X'
        else:  # Computer's turn
            move = computer_move(board)
            print(f"Computer's move: {move + 1}")
            board[move] = 'O'

        if check_winner(board, current_player):
            print_board(board)
            if current_player == 'X':
                print("You win!")
            else:
                print("Computer wins!")
            break

        if is_full(board):
            print_board(board)
            print("It's a tie!")
            break

        current_player = 'O' if current_player == 'X' else 'X'

# Run the game
tic_tac_toe()