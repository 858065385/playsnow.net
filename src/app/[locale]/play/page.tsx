import { Suspense } from 'react';
import type { Metadata } from 'next';
import GameContent from './GameContent';
import games from '@/../public/data/games.json';
import { getLocalizedText } from '@/lib/utils';
import type { GamesData, Game } from '@/types/games';
import type { Locale } from '@/app/config/i18n';

const gamesData = games as GamesData;

type PageParams = {
  locale: Locale;
};

type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

function getGameById(gameId: string | undefined): Game | undefined {
  if (!gameId) return undefined;
  return gamesData.games[gameId];
}

function normalizeSearchParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams?: PageSearchParams;
}): Promise<Metadata> {
  const locale = params.locale;
  const gameId = normalizeSearchParam(searchParams?.id);
  const game = getGameById(gameId);

  if (!game) {
    return {
      title: 'Play Game | PlayNow',
    };
  }

  const localizedTitle = getLocalizedText(game.title, locale) || gameId;
  const localizedDescription =
    getLocalizedText(game.description, locale) ||
    `Play ${localizedTitle} online on PlayNow.`;

  return {
    title: `${localizedTitle} | PlayNow`,
    description: localizedDescription,
  };
}

export default function PlayPage() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <GameContent />
    </Suspense>
  );
}
