# Portfolio

## Opis

Projekt "Portfolio" to nowoczesna aplikacja webowa, którą stworzyłem do prezentacji moich umiejętności, doświadczenia i projektów. Zbudowałem ją przy użyciu technologii React, Vite oraz Tailwind CSS, co zapewnia wysoką wydajność i nowoczesny wygląd.

## Technologie

Projekt wykorzystuje następujące technologie i biblioteki:

- **React** (^18.3.1) – główny framework do budowy interfejsu użytkownika
- **Vite** (^5.4.1) – szybki bundler do budowy aplikacji
- **TypeScript** (^5.5.3) – zapewnia statyczne typowanie i lepszą jakość kodu
- **React Router DOM** (^6.26.2) – obsługa routingu w aplikacji
- **Framer Motion** (^11.5.4) – animacje i efekty wizualne
- **Tailwind CSS** (^3.4.11) – stylowanie oparte na klasach
- **React Icons** (^5.3.0) – zestaw ikon do wykorzystania w UI
- **EmailJS** (^4.4.1) – obsługa formularza kontaktowego bez potrzeby backendu

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:
   ```sh
   git clone https://github.com/moje-repozytorium/portfolio.git
   cd portfolio
   ```
2. Zainstaluj zależności:
   ```sh
   npm install
   ```

## Uruchamianie aplikacji

- Tryb deweloperski:
  ```sh
  npm run dev
  ```
- Budowanie aplikacji:
  ```sh
  npm run build
  ```
- Podgląd zbudowanej aplikacji:
  ```sh
  npm run preview
  ```
- Lintowanie kodu:
  ```sh
  npm run lint
  ```

## Struktura projektu

```
portfolio/
├── src/
│   ├── assets/      # Statyczne zasoby (grafiki, ikony itp.)
│   ├── components/  # Komponenty UI
│   ├── features/    # Moduły aplikacji zawierające specyficzną logikę
│   ├── pages/       # Widoki aplikacji
│   ├── router/      # Konfiguracja routingu aplikacji
│   ├── types/       # Definicje typów TypeScript
│   ├── utils/       # Funkcje pomocnicze
│   ├── App.tsx      # Główny komponent aplikacji
│   ├── main.tsx     # Punkt wejściowy aplikacji
├── public/          # Pliki publiczne
├── package.json     # Konfiguracja zależności
├── tailwind.config.js # Konfiguracja Tailwind CSS
├── tsconfig.json    # Konfiguracja TypeScript
└── vite.config.ts   # Konfiguracja Vite
```

## Funkcjonalności

- Dynamiczne przełączanie sekcji portfolio
- Animacje interfejsu użytkownika (Framer Motion)
- Responsywny design dzięki Tailwind CSS
- Formularz kontaktowy z obsługą EmailJS
- Routing z użyciem React Router

## Wymagania systemowe

- Node.js (zalecana wersja LTS)
- npm lub yarn

## Autor

Projekt stworzyłem samodzielnie. Jeśli chcesz się ze mną skontaktować, odwiedź https://pawel9911.github.io/portfolio/#/contact.

## Licencja

Ten projekt jest dostępny na licencji MIT.
