import { 
  Home, 
  Mail, 
  Swords, 
  Scroll, 
  BookOpen, 
  BarChart3, 
  Hammer, 
  Settings, 
  LogOut,
  Image,
  BookText
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: Home },
  { title: 'Subscribers', url: '/admin/subscribers', icon: Mail },
  { title: 'Characters', url: '/admin/characters', icon: Swords },
  { title: 'Scenarios', url: '/admin/scenarios', icon: Scroll },
  { title: 'Dev Journal', url: '/admin/dev-journal', icon: BookOpen },
  { title: 'Rulebook', url: '/admin/lore', icon: BookText },
  { title: 'Media Library', url: '/admin/media-library', icon: Image },
  { title: 'Statistics', url: '/admin/statistics', icon: BarChart3 },
  { title: 'Workshop', url: '/admin/workshop', icon: Hammer },
  { title: 'Settings', url: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const { signOut } = useAuth();
  const collapsed = state === 'collapsed';

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'transition-all',
      isActive && 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
    );

  return (
    <Sidebar className={cn('border-r border-border bg-card', collapsed ? 'w-14' : 'w-60')}>
      <SidebarContent>
        <div className="p-4">
          <h2 className={cn(
            'font-display text-primary transition-all',
            collapsed ? 'text-sm text-center' : 'text-xl'
          )}>
            {collapsed ? 'SR' : 'Shadows Realms'}
          </h2>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className={cn('h-4 w-4', !collapsed && 'mr-2')} />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={signOut}>
                  <LogOut className={cn('h-4 w-4', !collapsed && 'mr-2')} />
                  {!collapsed && <span>Logout</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
