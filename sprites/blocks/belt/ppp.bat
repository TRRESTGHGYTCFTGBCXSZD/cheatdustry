@echo off
Setlocal enabledelayedexpansion

Set "Pattern=ultimate"
Set "Replace=extreme"

For %%# in ("C:\Users\LAED2\AppData\Roaming\Mindustry\mods\cheatdustry\sprites\blocks\belt\*.png") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

Pause&Exit