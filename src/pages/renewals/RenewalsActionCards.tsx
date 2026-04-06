import type { RenewalAction } from '../../models/renewalsModel';
import { IconActionCard } from '../../components/common';
import { getRenewalActionIcon } from './renewalsUi';

interface RenewalsActionCardsProps {
  actions: RenewalAction[];
  selectedAction: RenewalAction['id'] | null;
  onSelect: (id: RenewalAction['id']) => void;
}

const RenewalsActionCards = ({ actions, selectedAction, onSelect }: RenewalsActionCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((action) => (
        <IconActionCard
          key={action.id}
          title={action.title}
          description={action.description}
          icon={<div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.iconBg}`}>{getRenewalActionIcon(action.iconId, 'h-6 w-6 text-white')}</div>}
          active={action.id === selectedAction}
          onClick={() => onSelect(action.id)}
        />
      ))}
    </div>
  );
};

export default RenewalsActionCards;
