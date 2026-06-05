import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  Users,
  FlaskConical,
  BookOpen,
  Settings,
  CircleHelp,
} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar
      className="border-r border-slate-800 bg-gradient-to-b from-[#071a35] via-[#04142b] to-[#020d1d]"
    >
      <SidebarHeader>
        <div className="flex flex-col items-center py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400">
            ✨
          </div>

          <h2 className="mt-3 text-amber-400 font-bold">
            Registry
          </h2>

          <p className="text-xs text-slate-400">
            Ministry of Alchemical Records
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              className="bg-amber-700/30 text-amber-300"
            >
              <LayoutDashboard />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Users />
              Wizards
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <FlaskConical />
              Elixirs
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <BookOpen />
              Archives
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <button className="w-full rounded-xl bg-purple-300 py-2 text-black">
          + New Elixir
        </button>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <CircleHelp />
              Support
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}