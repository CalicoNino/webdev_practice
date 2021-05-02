import pygame
pygame.init()

sl = 50
border = 2
win = pygame.display.set_mode((600,500))
textFont=pygame.font.Font(None,32)

class Colour():
    black = (0, 0, 0)
    white = (255, 255, 255)
    gray = (169, 169, 169)
    red = (255, 0, 0)
    green = (0, 255, 0)
    blue = (0, 0, 255)

class MinigameView():
    def __init__(self):
        win.fill(Colour.black)
    def setupScreen(self):
        win.fill(Colour.black)

    def drawMinigame(self, mgd):    
        self.drawBoard(mgd)
        self.drawElems(mgd)
    

    def drawBoard(self, minigameData):
        for i in range(minigameData.height):
            for j in range(minigameData.width):
                self.drawRect(i * sl, j* sl, sl, sl, minigameData.board[i][j] == 1)

        
    def drawRect(self, x, y, width, height, type):
        pygame.draw.rect(win, Colour.black, (x,y,width,height))
        pygame.draw.rect(win, Colour.gray if type else Colour.black, (x + border,y + border,width-2*border,height-2*border))

    def drawElems(self, mgd):
        player = mgd.player
        item = mgd.item
        offset = sl/2 - mgd.player.w/2
        enemyOffset = sl/2 - mgd.enemies[0].w/2
        pygame.draw.rect(win, Colour.green, (player.x * sl + offset, player.y * sl + offset, player.w, player.w))
        pygame.draw.rect(win, Colour.blue, (item.x * sl + offset, item.y * sl + offset, item.w, item.w))
        for enemy in mgd.enemies:
            pygame.draw.rect(win, Colour.red, (enemy.x * sl + enemyOffset, enemy.y * sl + enemyOffset, enemy.w, enemy.w))


        lives = "Lives: " + str(mgd.lives)
        message = textFont.render(lives, True, Colour.red)

        win.blit(message,(400, 20))

    def updatePygame(self):
        pygame.display.update()






