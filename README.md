# Nuxt 3 Pushka major league

Eto doka po [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Koroche raspakowka
                                  
### For windows maybe nushen budet chocolatey chtobi zapusk comands make

Bud uveren chto install docker then:

```bash
# zapusk sborki image docker i podnyatie container
# only one raz v nachale
make up

# chtobi see chto u tebya in container proishodit
make logs

# zapuskaesh container i robish
make start

# ostanovka container, day computer machine otdohnut
make stop

# dropaetsa container, kogda nado perestroit
make down

# dropaetsa container i ubivaetsa image
make down-v

# zapusk pnpm inside container
make pn-command command="i any-lib"

# eto start i logs vmeste
make

```
                     
## Deploy

```bash
poka netu

```
