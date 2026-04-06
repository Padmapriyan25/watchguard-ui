import { FileText, Headphones, RotateCw, TicketPercent } from 'lucide-react';
import { IconActionCard } from '../../components/common';
import { subscriptionsQuickActionsData } from '../../data/mockData';

const getIcon = (iconId: string, active: boolean) => {
  const className = `h-7 w-7 ${active ? 'text-[#2491ff]' : 'text-slate-500'}`;

  switch (iconId) {
    case 'rotate':
      return <RotateCw className={className} />;
    case 'ticket':
      return <TicketPercent className={className} />;
    case 'support':
      return <Headphones className={className} />;
    default:
      return <FileText className={className} />;
  }
};

const SubscriptionsQuickActions = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {subscriptionsQuickActionsData.map((action) => (
        <IconActionCard
          key={action.id}
          title={action.title}
          description={action.subtitle}
          icon={getIcon(action.iconId, action.active)}
          active={action.active}
          align="center"
        />
      ))}
    </div>
  );
};

export default SubscriptionsQuickActions;
