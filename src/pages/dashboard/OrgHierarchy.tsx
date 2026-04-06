import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Network } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type { HierarchyNode } from '../../models/dashboardModel';

const MIN_BAR_WIDTH = 38;
const MAX_BAR_WIDTH = 175;

const collectExpandableIds = (node: HierarchyNode): string[] => {
  const childIds = node.children.flatMap(collectExpandableIds);
  return node.children.length > 0 ? [node.id, ...childIds] : childIds;
};

const getBarWidth = (percentage: number, depth: number) => {
  const maxWidth = Math.max(70, MAX_BAR_WIDTH - depth * 24);
  return `${Math.max(MIN_BAR_WIDTH, (percentage / 100) * maxWidth)}px`;
};

interface TreeRowProps {
  node: HierarchyNode;
  depth?: number;
  expandedIds: string[];
  onToggle: (id: string) => void;
}

const TreeRow = ({ node, depth = 0, expandedIds, onToggle }: TreeRowProps) => {
  const hasChildren = node.children.length > 0;
  const isExpanded = expandedIds.includes(node.id);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 py-2">
        <div className="flex items-center" style={{ marginLeft: `${depth * 22}px` }}>
          {depth > 0 && <div className="mr-2 h-0 w-5 border-t-2 border-slate-200" />}
          {hasChildren ? (
            <button onClick={() => onToggle(node.id)} className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700">
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          ) : (
            <div className="mr-2 h-6 w-6" />
          )}
          <div className="mr-3 h-7 rounded-r-full bg-slate-200/70" style={{ width: getBarWidth(node.percentage, depth) }}>
            <div className={`h-full rounded-r-full ${node.color}`} style={{ width: `${Math.max(3, node.percentage)}%` }} />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-[#24355a]">{node.name}</div>
          <div className="text-xs text-slate-500">{node.percentage.toFixed(2)}%</div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="relative ml-4 border-l-2 border-slate-200 pl-1">
          {node.children.map((child: HierarchyNode) => (
            <TreeRow key={child.id} node={child} depth={depth + 1} expandedIds={expandedIds} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

const OrgHierarchy = () => {
  const { hierarchy } = useSelector((state: RootState) => state.dashboard);
  const root = hierarchy.root;

  const expandableIds = useMemo(() => collectExpandableIds(root), [root]);
  const [expandedIds, setExpandedIds] = useState<string[]>([root.id]);

  const allExpanded = expandableIds.length > 0 && expandableIds.every((id) => expandedIds.includes(id));

  const handleToggle = (id: string) => {
    setExpandedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  const handleExpandAll = () => {
    setExpandedIds(allExpanded ? [root.id] : expandableIds);
  };

  return (
    <div className="app-panel mt-2 p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <Network className="h-4 w-4 text-[#4f7fff]" />
            Customer structure
          </div>
          <h2 className="mt-2 text-lg font-bold text-slate-800">Organization Hierarchy</h2>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[24px] border border-white/80 bg-white/60 p-4">
        <div className="min-w-[720px]">
          <TreeRow node={root} expandedIds={expandedIds} onToggle={handleToggle} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
        <span>Click the disclosure buttons to expand and explore the hierarchy</span>
        <button onClick={handleExpandAll} className="font-medium text-[#4f7fff] hover:text-[#315edf]">
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
    </div>
  );
};

export default OrgHierarchy;
