@echo off
setlocal enabledelayedexpansion

:: Установка кодировки для поддержки кириллицы
chcp 1251 > nul

echo Начинаем переименование PNG файлов в нижний регистр...
echo.

:: Счетчик обработанных файлов
set "count=0"

:: Проверка наличия PNG файлов
dir /b *.png >nul 2>&1
if errorlevel 1 (
    echo В текущей папке PNG файлы не найдены.
    goto :end
)

:: Перебор всех PNG файлов
for %%F in (*.png *.PNG) do (
    set "filename=%%~nF"
    set "extension=%%~xF"
    
    :: Преобразование имени в нижний регистр
    for %%A in ("A=a" "B=b" "C=c" "D=d" "E=e" "F=f" "G=g" "H=h" "I=i" "J=j" "K=k" "L=l" "M=m" "N=n" "O=o" "P=p" "Q=q" "R=r" "S=s" "T=t" "U=u" "V=v" "W=w" "X=x" "Y=y" "Z=z") do (
        set "filename=!filename:%%~A!"
    )
    
    :: Преобразование расширения в нижний регистр
    set "extension=!extension:.PNG=.png!"
    
    :: Проверка, нужно ли переименовывать файл
    if not "%%~nF%%~xF"=="!filename!!extension!" (
        ren "%%F" "!filename!!extension!" >nul 2>&1
        if not errorlevel 1 (
            echo Переименован: %%F -^> !filename!!extension!
            set /a "count+=1"
        ) else (
            echo Ошибка при переименовании: %%F
        )
    )
)

:: Вывод итогов
echo.
echo Обработка завершена. Переименовано файлов: %count%

:end
echo.
echo Нажмите любую клавишу для выхода...
pause >nul